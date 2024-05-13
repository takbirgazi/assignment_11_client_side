const NewsletterSignup = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">Newsletter</h2>
            </div>
            <div className="bg-[#f3f1c6] py-10 md:py-40 rounded-md flex items-center justify-center my-5 w-11/12 mx-auto min-h-full">
                <div className="flex flex-col gap-5 md:gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="md:text-4xl text-xl font-bold text-center">Explore Our Best Service</h2>
                        <p className="text-center">Join first to get the best service</p>
                    </div>                   
                    <div>
                        <form action="" className="flex md:flex-row flex-col gap-5 md:gap-0">
                            <div className="border rounded md:rounded-tl-md md:rounded-bl-md">
                                <input className="p-1 w-full" type="text" placeholder="Write your Email" />
                            </div>
                            <div className="border rounded md:rounded-tr-md md:rounded-br-md">
                                <input className="p-1 w-full" type="text" placeholder="Write your Password"/>
                            </div>
                            <div className="ml-1 border border-orange-600 rounded bg-orange-500 text-white text-center">
                                <input className="p-1 cursor-pointer" type="submit" value="Subscribe" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;