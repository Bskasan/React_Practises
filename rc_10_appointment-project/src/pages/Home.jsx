import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);

  //! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

  console.log(doctors);
  console.log(appointmentData);
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">HELSINKI HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList />
    </main>
  );
};

export default Home;
