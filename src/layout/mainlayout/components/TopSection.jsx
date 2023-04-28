import React from 'react'

const TopSection = () => {
  return (
    <div className="flex w-full h-8 px-16 bg-slate-200 justify-between items-center">
        <div className="flex container mx-auto px-6">
          <img src="/images/logo.png" alt="" className="w-8" />
          <h4 className="text-slate-500">Up to 70% off on all products</h4>
        </div>
        <div className='flex items-center justify-between gap-5'>
          <h5>USD</h5>
          <h5>English</h5>
        </div>
      </div>
  )
}

export default TopSection