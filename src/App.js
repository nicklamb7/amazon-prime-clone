import React from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './Requests';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <Header />

      <Banner />



      <Row 
        title="Amazon Originals and Exclusives"
        fetchUrl={requests.fetchNetflixOriginals} 
        isPrime
      />      
      
      <Row 
        title="Movies we think you'll like" 
        fetchUrl={requests.fetchDocumentaries}
        isPrime
      />

      <Row 
        title="Watch Next" 
        fetchUrl={requests.fetchTrending}
      />

      <Row 
        title="Prime Video Channels" 
        fetchUrl={requests.fetchTopRated}
      />

      <Row 
        title="Recently added movies"
        fetchUrl={requests.fetchActionMovies}
        isPrime
       />

    </div>
  );
}

export default App;
