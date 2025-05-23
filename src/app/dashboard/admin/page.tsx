import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage=()=>{
    return(
        <div className=" p-4 flex gap-4 flex-col md:flex-row">
            {/* left */}
       <div className=" w-full lg:w-2/3">
        {/* usercards */}
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staff"/>
        </div>
        {/* Middle Chart */}
        <div className=" flex pt-2 gap-4 flex-col lg:flex-row ">
         {/* Count Chart */}
            <div className=" w-full lg:flex-[2] h-[450px] ">
            <CountChart/>
            </div>
            {/* Attendance Chart */}
            <div className=" w-full lg:flex-[3]  h-[450px] ">
            <AttendanceChart/>

            </div>

        </div>

        {/* Bottom Chart */}
            <div className=" w-full h-[500px]">
                <FinanceChart/>
            </div>

       </div>
       {/* right */}
       <div className=" w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcements/>
       </div>
        </div>
    )
}
export default AdminPage;