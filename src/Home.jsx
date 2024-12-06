import React from 'react'
import image from './assets/image.jpg'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let interval = setTimeout(() => {
      Next()
    }, 3000);
    return () => { clearTimeout(interval) }
  }, [index])


  const ImageData = [
    {
      image: 'https://images.unsplash.com/photo-1733227337809-6b7d33bfecd3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1732835620321-29ab5c156961?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: 'https://images.unsplash.com/photo-1732470878984-f35c1a805e3f?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: 'https://images.unsplash.com/photo-1733170683329-b9b26aaf1162?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: 'https://images.unsplash.com/photo-1733234976396-87cf34ae6038?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: image
    }

  ]
  const Next = () => {
    if (index == ImageData.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }


  return (
    <div>
      <div className='w-full h-[85vh] relative overflow-clip bg-red-200'>
        {
          ImageData.map((val, i) => {
            return (
              <img src={val.image} alt="slider" className={`h-full absolute top-0 z-10 left-0 w-full ${i == index ? "translate-x-0" : "translate-x-[10000px]"} transition-all duration-1000 delay-100 ease-in-out object-cover`} />
            )
          })
        }
      </div>

      <div>
        <button className='h-fit w-fit px-8 py-2 bg-primary mt-10' onClick={() => {
          Next()
        }}> Next </button>
      </div>
    </div>
  )
}
