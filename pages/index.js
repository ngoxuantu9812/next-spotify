import Head from 'next/head';
import Image from 'next/image';
import Main, { siteTitle } from '../components/Layout/Main';
import MenuTop from '../components/Layout/MenuTop';
import piano from '../public/imgs/piano.jpeg'

export default function Home() {
  return (
    <Main home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MenuTop></MenuTop>
      <main>
        <div className="top_content pt-6 font-bold flex justify-between">
          <button className='forcus text-2xl text-white'>Tập trung</button>
          <button className='show_all uppercase text-sm text-gray-100'>Hiện tất cả</button>
        </div>
        <div className="list-item-main flex flex-nowrap">
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          <div className="item-categroy p-3 w-44 rounded-md bg-zinc-700 mr-6">
            <a href="">
              <Image
                priority
                src={piano}
                className="img-category rounded-md"
                height={169}
                width={169}
                alt={siteTitle}
              />
              <div className="item-content pt-3">
                <h4 className='text-lg text-white pb-2'> Peaceful Piano</h4>
                <p className='text-sm text-gray-400'>Relax and indulge with beautiful piano pieces</p>
              </div>
            </a>
          </div>
          
        </div>
      </main>
    </Main>
  )
}