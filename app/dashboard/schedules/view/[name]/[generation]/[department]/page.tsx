import { scheduleType } from "@/components/lib/definitions";
import { fetchViewSchedules } from "@/components/lib/scheduleAction"
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { name: string, generation:string, department:string } }) => {
    const data = await fetchViewSchedules(params);
    console.log(data);
    if(!data) {
        notFound();
    }
  return (
    <main>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Class Name</th>
                    <th>Course</th>
                    <th>Teacher ID</th>
                    <th>Teacher Name</th>
                    <th>Day</th>
                    <th>Part of Day</th>
                    <th>Department</th>
                    <th>Generation</th>
                    <th>Period</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d: scheduleType) => {
                    return (
                        <tr key={d.id}>
                            <td>
                                {d.id}
                            </td>
                            <td>
                                {d.class_name}
                            </td>
                            <td>
                                {d.course}
                            </td>
                            <td>
                                {d.teacher_id}
                            </td>
                            <td>
                                {d.teacher_name}
                            </td>
                            <td>
                                {d.day}
                            </td>
                            <td>
                                {d.part_of_day}
                            </td>
                            <td>
                                {d.department}
                            </td>
                            <td>
                                {d.generation}
                            </td>
                            <td>
                                {d.period}
                            </td>
                        </tr>
                    )
                })}   
            </tbody>
        </table>
    </main>
  )
}

export default page