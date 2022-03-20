import React, { Fragment, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { ImportImgState } from "../../../store/Modals";
import { Dialog, Transition } from "@headlessui/react";
import {
  ModalContainer,
  ModalContentContainer,
  ModalPrimaryButton,
  ModalIconContainer,
} from "./styles";
import { CameraIcon } from "@heroicons/react/outline";
import { db, storage } from "../../../firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadImgModal = () => {
  const { data: session } = useSession();

  const [isModalOpen, setIsModalOpen] = useRecoilState(ImportImgState);
  const [loading, setLoading] = useState(false);

  // references
  const captionText = useRef(null);
  const fileSelectionRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState<
    string | null | undefined
  >();

  const addImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const readFile = new FileReader();

    // the target file
    let targetFile = event.target.files[0];

    // the selected file
    if (targetFile) {
      readFile.readAsDataURL(targetFile as Blob);
    }

    // load/upload select img
    readFile.onload = (readingEvent) => {
      setSelectedImage(readingEvent?.target?.result as string);
    };
  };

  //upload img to database
  const uploadImg = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    //add img to db
    const docReference = await addDoc(collection(db, "posts"), {
      username: session?.user?.name,
      caption: captionText.current.value,
      profileImg: session?.user?.image,
      timestamp: serverTimestamp(),
    });

    //upload img to db with post img id
    const imgReference = ref(storage, `posts/${docReference?.id}/image`);

    try {
      await uploadString(imgReference, selectedImage, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imgReference);

          //get img URL from db and update stored img

          await updateDoc(doc(db, "posts", docReference.id), {
            image: downloadURL,
          });
        }
      );

      toast("Image uploaded", {
        type: "error",
      });
      setIsModalOpen(false);
      setLoading(false);
      setSelectedImage(null);
    } catch (error) {
      console.log(`Error `, error);
      toast(`Image Not Uploaded \n${error}`, {
        type: "error",
      });
      setLoading(false);
    }
  };

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className={"fixed z-10 inset-0 overflow-y-auto"}
        onClose={setIsModalOpen}>
        <ModalContainer>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <ModalContentContainer>
              {/* Modal Content */}

              {selectedImage ? (
                <>
                  <img
                    src={selectedImage}
                    className="w-full object-contain cursor-pointer"
                    alt="engineering hub custom uploaded image"
                    onClick={() => setSelectedImage(null)}
                  />
                </>
              ) : (
                <>
                  <ModalIconContainer
                    onClick={() => fileSelectionRef.current.click()}>
                    <CameraIcon className="h-6 w-6 text-teal-500" />
                  </ModalIconContainer>
                </>
              )}

              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900">
                  Upload Image
                </Dialog.Title>

                <div>
                  <input
                    ref={fileSelectionRef}
                    onChange={addImageHandler}
                    type="file"
                    hidden
                  />
                </div>

                <div className="mt-2">
                  <input
                    ref={captionText}
                    className="border-none focus:ring-0 w-full text-center"
                    type="text"
                    placeholder="Enter caption for image"
                  />
                </div>
              </div>

              {/* Modal Buttons */}
              <div>
                <div className="mt-5 sm:mt-6">
                  <ModalPrimaryButton
                    type="button"
                    disabled={!selectedImage}
                    onClick={() => uploadImg()}>
                    {loading ? "Uploading.." : "Upload Image"}
                  </ModalPrimaryButton>
                </div>
              </div>
            </ModalContentContainer>
          </Transition.Child>
        </ModalContainer>
        <ToastContainer />
      </Dialog>
    </Transition.Root>
  );
};

export default UploadImgModal;
