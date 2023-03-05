import { getEmployees } from '../services/employee';
import HomePageContainer from '../containers/HomePage';

export default async function Home() {
  const employees = await getEmployees();

  return <HomePageContainer employees={employees} />;
}
