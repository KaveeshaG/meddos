import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="students" />
            <Widget type="sample_counts" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Age vise BMI summary" aspect={4} />
          </div>
          <div className="listContainer">
          <div className="listTitle">Recent Students</div>
          <Table />
        </div>
        </div>
    </div>
  )
}

export default Home 