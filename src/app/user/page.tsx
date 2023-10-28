import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth'
import React from 'react'

const UserPage = async () => {

  const session = await getServerSession(authOptions);

  return (
    <div>
        로그인 된 유저만 볼 수 있는 페이지
    </div>
  )
}

export default UserPage