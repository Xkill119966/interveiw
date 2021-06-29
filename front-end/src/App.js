import React, { useEffect } from 'react'
import { connect } from "react-redux";
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import { apiLoadAllBarData, apiLoadAllPieData } from './action/backend/dataApi'
import Form from './components/Form'
import './App.css';

function App({ loadBarData, loadPieData }) {

  useEffect(() => {
    loadBarData()
    loadPieData()
  }, [])
  return (
    <div className="container">
      <div className="App">
        <BarChart />
        <PieChart />
      </div>
      <div style={{ marginTop: '80px' }}>
        <Form />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loadBarData: () => dispatch(apiLoadAllBarData()),
    loadPieData: () => dispatch(apiLoadAllPieData())
  };
}

export default connect(null, mapDispatchToProps)(App);
