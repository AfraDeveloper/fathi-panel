import {

    UilCrockery,
    UilDumbbell,
    UilStethoscopeAlt,

} from "@iconscout/react-unicons";
import { UilUser } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'
import { users } from "../data/user";
const Dashboard = () => {
    const type = ['رژیم', 'مشاوره', 'برنامه']
    const status = ["ثبت درخواست", 'ارسال شده']
    const options = {
        chart: {
            id: 'apexchart-example'
        },
        colors: ["#ef4444", "#34d399", "#0ea5e9"],
        labels: ["رژیم", "مشاوره", "برنامه"],

    }
    const series = [44, 55, 41]


    return (
        <div>
            <div className="grid grid-cols-4 gap-8">
                <div className="box  flex items-center justify-around h-32 rounded-md bg-dark">
                    <div>
                        <h2 className="text-xl">کاربر</h2>
                        <p className="text-gray-500 mt-4">125</p>
                    </div>
                    <span className="text-emerald-500 bg-emerald-600/50 p-3 rounded-md shadow-md">
                        <UilUser />
                    </span>
                </div>
                <div className="box  flex items-center justify-around h-32 rounded-md bg-dark">
                    <div>
                        <h2 className="text-xl">برنامه</h2>
                        <p className="text-gray-500 mt-4">125</p>
                    </div>
                    <span className="text-purple-500 bg-purple-600/50 p-3 rounded-md shadow-md">
                        <UilDumbbell />
                    </span>
                </div>
                <div className="box  flex items-center justify-around h-32 rounded-md bg-dark">
                    <div>
                        <h2 className="text-xl">رژیم</h2>
                        <p className="text-gray-500 mt-4">125</p>
                    </div>
                    <span className="text-rose-500 bg-rose-600/50 p-3 rounded-md shadow-md">
                        <UilCrockery />
                    </span>
                </div>
                <div className="box  flex items-center justify-around h-32 rounded-md bg-dark">
                    <div>
                        <h2 className="text-xl">مشاوره</h2>
                        <p className="text-gray-500 mt-4">125</p>
                    </div>
                    <span className="text-sky-500 bg-sky-600/50 p-3 rounded-md shadow-md">
                        <UilStethoscopeAlt />
                    </span>
                </div>

            </div>
            {/* chart */}
            <div className="grid grid-cols-7 gap-8 mt-8">
                <div className="bg-dark col-span-3  p-8">
                    <Chart options={options} series={series} type="donut" />
                    <div className="bg-box py-4 flex justify-between px-4 items-center rounded-md my-4">
                        <span> تعداد کل درخواست ها</span>
                        <span>145</span>
                    </div>
                    <div className="bg-box py-4 flex justify-between px-4 items-center rounded-md my-4">
                        <span>   بیشترین درخواست : برنامه    </span>
                        <span>45</span>
                    </div>
                </div>
                <div className="bg-dark col-span-4 p-4">
                    <div className="bg-box py-4 text-center rounded-md my-4">
                        آخرین درخواست ها
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>نام و نام خانوادگی</th>
                                <th>شماره تماس</th>
                                <th>نوع درخواست</th>
                                <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{type[Math.floor(Math.random() * type.length)]}</td>
                                    <td>
                                        {status[Math.floor(Math.random() * status.length)]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Dashboard