export default function Loading() {
  return (
    <section className='mt-14 mb-24'>
      <div className='container'>
        <div className='animate-pulse'>
          <div className='mb-12'>
            <h1 className='h-16 w-1/2 bg-theme-sliver rounded-lg mb-4'></h1>
            <p className='h-14 w-2/3 bg-theme-sliver rounded-lg'></p>
          </div>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-4'>
              <ul className='space-y-8'>
                {Array.from({ length: 4 })?.map((_, i) => (
                  <li key={i} className='h-16 bg-theme-sliver rounded-lg'></li>
                ))}
              </ul>
            </div>
            <div className='col-span-8 bg-theme-sliver rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
