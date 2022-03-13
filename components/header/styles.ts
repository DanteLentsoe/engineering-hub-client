import tw from 'tailwind-styled-components'

export const HeaderContainer = tw.div`
shawdow-sm z-100 sticky top-0 border-b bg-white
`

export const HeaderItemsCollection = tw.div`
mx-5 flex max-w-6xl justify-between lg:mx-auto
`

export const ImgContainerHeader = tw.div`
relative hidden  w-24 cursor-pointer lg:inline-grid 
`

export const ImgContainerMobile = tw.div`
relative  w-10 flex-shrink-0 cursor-pointer lg:hidden
`

export const InputContainer = tw.div`
max-w-xs
`

export const InputSpacing = tw.div`
relative mt-1 rounded-md  p-3
`

export const SearchIconContainer = tw.div`
pointer-events-none absolute inset-y-0 flex items-center pl-3
`

export const InputDefault = tw.input`
focus:border-gray-teal-8 600 block w-full rounded-md border-gray-300
            bg-gray-100 pl-10 focus:ring-teal-800 sm:text-sm
`
export const IconsContainer = tw.div`
flex items-center justify-end space-x-4
`

export const MessageNotifier = tw.div`
flex-center absolute -top-1 -right-3 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs
`
export const Form = tw.form`
bg-white text-center rounded py-8 px-5 shadow max-w-xs
`

export const MainButton = tw.button`
bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded
`
