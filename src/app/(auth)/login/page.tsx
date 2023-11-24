'use client'

import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex flex-col items-center max-w-md space-y-8'>
          <div className='flex flex-col items-center gap-8'>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path fill-rule="evenodd" clip-rule="evenodd" fill="#6441A4" d="M28 30V18a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0zm16 0V18a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0zm18.356 11.644-1.782 1.782-.007-.008a2 2 0 0 1-2.837-2.816l-.01-.01 2.28-2.28V5.001A1 1 0 0 0 59.001 4H16.999A1 1 0 0 0 16 5.001v38a1 1 0 0 0 .999.999h8A3 3 0 0 1 28 47.001v1.375l2.744-2.744a5.961 5.961 0 0 1 4.1-1.632H49.75A4.25 4.25 0 0 1 54 48.25a4.237 4.237 0 0 1-1.222 2.972l-3.353 3.353A4.982 4.982 0 0 1 45.937 56H34l-6.577 6.577A4.98 4.98 0 0 1 23.937 64H20a4 4 0 0 1-4-4v-2.999A1 1 0 0 0 14.999 56h-6A4.998 4.998 0 0 1 4 51.001V18a2 2 0 1 1 4 0v33.001a1 1 0 0 0 .999.999h6A4.998 4.998 0 0 1 20 57.001v1.998A1 1 0 0 0 20.999 60h3.313l6.577-6.577A4.985 4.985 0 0 1 34.376 52h11.937l4-4H34l-5.236 5.236a2.822 2.822 0 0 1-1.928.764A2.838 2.838 0 0 1 24 51.164V48h-7.001A4.998 4.998 0 0 1 12 43.001v-38A4.998 4.998 0 0 1 16.999 0H59.001A4.998 4.998 0 0 1 64 5.001v32.531a5.967 5.967 0 0 1-1.644 4.112zM8 12a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 12z"/></svg>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type='button'
            className='max-w-sm mx-auto w-full'
            onClick={loginWithGoogle}>
            {isLoading ? null : (
              <svg
                className='mr-2 h-4 w-4'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  fill='#34A853'
                />
                <path
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  fill='#EA4335'
                />
                <path d='M1 1h22v22H1z' fill='none' />
              </svg>
            )}
            Google
          </Button>
        </div>
      </div>
    </>
  )
}

export default Page