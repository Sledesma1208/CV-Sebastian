'use client'

import { Dialog } from '@headlessui/react'

type ExampleProps = {
  open: boolean;
  onClose: () => void;
}

function Example({ open, onClose }: ExampleProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <div className="fixed inset-0 bg-gray-800/75" aria-hidden="true" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel
            className="border-3 border-white relative transform overflow-hidden rounded-lg bg-inherit text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="px-2 pt-2 pb-2 sm:p-2 sm:pb-2">
                <div>
                <img className='rounded-lg' src="/HdV-Imagen.jpeg" alt="" />
                </div>
            </div>
            <div className="bg-inherit px-4 py-3 flex justify-center">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 sm:ml-3 sm:w-auto"
              >
                Cerrar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default Example