'use client'
import { FC, ReactNode, createContext, useRef, useState } from 'react';
import CloseIcon from '../icons/CloseIcon';

export type ModalContent = { main: ReactNode; header?: ReactNode; footer?: ReactNode; closeIcon?: boolean }

export type ModalContextType = {
  show: (content: ModalContent) => void
  hide: () => void
}

export const defaultValue: ModalContextType = {
  show: () => {},
  hide: () => {},
}

export const ModalContext = createContext<ModalContextType>(defaultValue)

const ModalContextProvider: FC<{ children: ReactNode }> = (props) => {
  const { children } = props
  const [header, setHeader] = useState<ReactNode>()
  const [main, setMain] = useState<ReactNode>()
  const [footer, setFooter] = useState<ReactNode>()
  const [closeIcon, setCloseIcon] = useState<boolean>(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const backDropRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const show = ({ main, closeIcon = true, footer, header }: ModalContent) => {
    const overlay = overlayRef.current
    const backDrop = backDropRef.current
    const modal = modalRef.current
    if (!modal || !backDrop || !overlay) return

    setHeader(header)
    setMain(main)
    setFooter(footer)
    setCloseIcon(closeIcon)

    document.body.classList.add('overflow-hidden')

    overlay.classList.remove('hidden')
    setTimeout(() => {
      overlay.classList.remove('invisible')
      overlay.classList.add('opacity-50')
    }, 0)

    backDrop.classList.remove('hidden')
    setTimeout(() => {
      backDrop.classList.remove('invisible')
      backDrop.classList.add('opacity-100')
    }, 0)

    modal.classList.remove('transition')
    modal.classList.remove('translate-y-0')
    modal.classList.add('-translate-y-24')
    setTimeout(() => {
      modal.classList.add('transition')
      modal.classList.add('translate-y-0')
      modal.classList.remove('-translate-y-24')
    }, 0)
  }

  const hide = (e?: React.MouseEvent<HTMLElement>) => {
    const overlay = overlayRef.current
    const backDrop = backDropRef.current
    const modal = modalRef.current
    if (!modal || !backDrop || !overlay) return
    document.body.classList.remove('overflow-hidden')

    overlay.ontransitionend = () => {
      overlay.classList.add('invisible')
      overlay.classList.add('hidden')
      overlay.ontransitionend = null
    }
    overlay.classList.remove('opacity-50')

    backDrop.ontransitionend = () => {
      backDrop.classList.add('invisible')
      backDrop.classList.add('hidden')
      backDrop.ontransitionend = null
    }
    backDrop.classList.remove('opacity-100')

    modal.classList.remove('transition')
    modal.classList.add('translate-y-0')
    modal.classList.remove('-translate-y-24')
    setTimeout(() => {
      modal.classList.add('transition')
      modal.classList.remove('translate-y-0')
      modal.classList.add('-translate-y-24')
    }, 0)
  }

  const rows =
    header && footer
      ? 'grid-rows-[auto,1fr,auto]'
      : header && !footer
      ? 'grid-rows-[auto,1fr]'
      : footer && !header
      ? 'grid-rows-[1fr,auto]'
      : 'grid-rows-[auto]'

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      <div
        ref={overlayRef}
        className={`hidden invisible fixed h-full w-full top-0 left-0 bg-black transition-opacity duration-300 opacity-0`}
      />
      <div
        ref={backDropRef}
        className='hidden invisible fixed h-full w-full top-0 left-0 transition-opacity duration-300 opacity-0'
        onClick={hide}
      >
        <div
          ref={modalRef}
          className={`relative left-0 top-0 right-0 bg-white rounded-xl shadow-xl grid z-10 ${rows} max-h-screen overflow-hidden max-w-screen-sm mx-auto sm:top-[10vh] sm:max-h-[80vh] transition-transform duration-300 ease-in-out -translate-y-24`}
        >
          {closeIcon && (
            <button
              className='rounded-xl inline-flex items-center justify-center mr-4 transition-all absolute right-0 top-4 bg-neutral-100 cursor-pointer fill-neutral-300 hover:fill-neutral-400 w-10 h-10'
              onClick={hide}
            >
              <CloseIcon width={30} height={30} />
            </button>
          )}
          {header && <header className='relative p-4'>{header}</header>}
          {main && <main className='overflow-scroll'>{main}</main>}
          {footer && (
            <footer className='pl-4 sm:pl-8 pr-4 sm:pr-8 pb-4 flex flex-col gap-4 '>
              <hr className='border-t border-neutral-300 block w-full' />
              <div className='flex justify-center'>{footer}</div>
            </footer>
          )}
        </div>
      </div>
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
