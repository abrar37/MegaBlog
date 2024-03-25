import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'

function Footer() {
  return (
    <footer className="relative overflow-hidden py-10">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                    <div className="flex h-full flex-col justify-between">
                        <div className="mb-4 inline-flex items-center">
                            <Logo width="100px" />
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full text-gray-500">
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full text-gray-500">
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-4/12">
                    <div className="h-full">
                        <p className="text-sm text-gray-500">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer