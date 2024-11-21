'use client'
import loadingStyle from './loading.module.scss';

export default function Loading() {
  return (
    <div className={loadingStyle['container']}>
      <div className={loadingStyle['spinner']}></div>
      <p>Loading...</p>
    </div>
  )
}
