import React, { useEffect } from 'react'
import { connect } from "react-redux";
import BarChart from './components/Chart/BarChart'
import PieChart from './components/Chart/PieChart'
import { apiLoadAllBarData, apiLoadAllPieData, apiAddData } from './action/backend/DataApi'
import Form from './components/Form/Form'
import './App.css';

function App({ loadBarData, loadPieData, addData }) {

  useEffect(() => {
    loadBarData()
    loadPieData()
  }, [loadBarData , loadPieData])
  return (
    <div className="container">
      <div className="App">
        <BarChart />
        <PieChart />
      </div>
      <div style={{ marginTop: '80px' }}>
        <Form addData={addData} />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loadBarData: () => dispatch(apiLoadAllBarData()),
    loadPieData: () => dispatch(apiLoadAllPieData()),
    addData: (data) => dispatch(apiAddData(data))
  };
}

export default connect(null, mapDispatchToProps)(App);
