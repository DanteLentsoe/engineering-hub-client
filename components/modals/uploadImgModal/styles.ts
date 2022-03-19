import tw from "tailwind-styled-components";

export const ModalContainer = tw.div`
flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0
`;

export const ModalContentContainer = tw.div`
inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full
`;

export const ModalPrimaryButton = tw.button`
inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-800 text-base font-medium text-white hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-teal-600 sm:text-sm disabled:bg-gray-400 disabled:cursor-not-allowed 
`;

export const ModalIconContainer = tw.div`
mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-800 cursor-pointer
    `;
