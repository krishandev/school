const Announcements=()=>{
    return(
        <div className=" bg-white p-4 rounded-md">
            <div className=" flex items-center justify-between">
                <h1 className=" text-xl font-semibold">Announcements</h1>
                <span className=" text-xs text-gray-400">View All</span>
            </div>
            <div className=" flex flex-col gap-4 mt-4">
                <div className=" bg-devSkyLight rounded-md p-4">
                    <div className=" flex items-center justify-between">
                        <h2 className=" font-medium">Announcements Title</h2>
                        <span className=" text-xs text-gray-400 bg-white rounded-md px-1 py-1">21-05-2025</span>
                    </div>
                    <p className=" text-xs text-gray-400  mt-1">This is Announcement description. Write here about the announcements</p>
                </div>

                <div className=" bg-devPurpleLight rounded-md p-4">
                    <div className=" flex items-center justify-between">
                        <h2 className=" font-medium">Announcements Title</h2>
                        <span className=" text-xs text-gray-400 bg-white rounded-md px-1 py-1">21-05-2025</span>
                    </div>
                    <p className=" text-xs text-gray-400  mt-1">This is Announcement description. Write here about the announcements</p>
                </div>

                <div className=" bg-devYellowLight rounded-md p-4">
                    <div className=" flex items-center justify-between">
                        <h2 className=" font-medium">Announcements Title</h2>
                        <span className=" text-xs text-gray-400 bg-white rounded-md px-1 py-1">21-05-2025</span>
                    </div>
                    <p className=" text-xs text-gray-400 mt-1">This is Announcement description. Write here about the announcements</p>
                </div>
            </div>
        </div>
    )
}
export default Announcements;
