import Image from "next/image";
import { useRouter } from 'next/router';

const PropertyDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1>Property ID: {id}</h1>
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src='/beach_1.jpg'
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathrooms
                    </span>

                    <hr />

                    <div className='py-6 flex items-center space-x-4'>
                        <Image
                            src='/profile_pic_1.jpg'
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user name"
                        />
                    </div>

                    <p><strong>John Doe</strong> is your host</p>

                    <hr />

                    <p className="mt-6 text-lg">
                        wdasdasfjowejfowejfoiwejoiwj
                    </p>
                </div>

                {/* <ReservationSidebar
                    property={property}
                    userId={userId}
                /> */}
            </div>
        </main >
    )
}

export default PropertyDetailPage;