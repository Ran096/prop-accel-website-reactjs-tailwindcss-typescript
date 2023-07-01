import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Review', href: '#' },
  { name: 'Blog', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative   z-1">
        <div className=" box-border rotate-[55deg]  h-[97em] w-[106em]  top-[-65em] left-[-744px] bg-[#3c0775]   absolute "></div>
      </div> 
       <div className="flex  justify-end">
        <div className="box-border rotate-[57deg]  h-[52em] w-[102em]  top-[-56em] left-[-225px] bg-[#3c0775]  absolute "></div>
      </div> 

        <div className="w-0 h-0 relative z-5">
        <div className="w-[780px] h-[700px]   left-[-340px] top-[-325px] absolute bg-purple-800 rounded-e-full"></div>
      </div>  
      <header className="absolute inset-x-12 top-0 z-50">
        <nav className="flex items-center justify-between p-10 lg:px-5" aria-label="Global">
          <div className=" flex lg:flex-1">
            <a href="#" className="ml-10 text-white m-5.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1>Logo</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-end justify- rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden  lg:flex lg:flex-1 mr-10  lg:justify-end lg:gap-x-14">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>

        </nav>
         <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-5" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1> Logo </h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog> 
      </header>
    </div>
  )
}



