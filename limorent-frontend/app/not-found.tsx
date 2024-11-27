export default function NotFound() {
    return (
        <>
            <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center pt-12 pb-56'>
                <div className={'flex flex-col sm:flex-row space-y-16 items-center sm:space-x-16 sm:space-y-0'}>
                    <div className={'text-center space-y-4'}>
                        <h1 className='text-9xl font-bold grotesk'>404</h1>
                        <p className={'max-w-sm text-2xl'}>
                            Strona o podanym adresie nie istnieje
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
