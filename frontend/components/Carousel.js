import React from "react";
import Slider from "react-slick";

const test = (
  <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-right w-6 h-6">
    <path
      fill-rule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        content: `url("")`,
        width: 55,
        height: 55,
        right: -55,
        top: 95,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2348bb78' class='chevron-right w-6 h-6'%3E%3Cpath fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
      }}
      onClick={onClick}
    >
      next
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        content: `url("")`,
        width: 55,
        height: 55,
        left: -55,
        top: 95,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2348bb78' class='chevron-left w-12 h-12'%3E%3Cpath fill-rule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E%0A")`,
      }}
      onClick={onClick}
    >
      next
    </div>
  );
}

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <Slider {...settings}>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1 overflow-auto ">
          <div class=" bg-green-500 h-auto -pb-8 w-full  py-1 mx-auto text-white overflow-auto hover:bg-green-500 border-2 border-transparent hover:text-white shadow-lg  mb-4 rounded-lg ">
            <svg
              class="w-56 h-56 p-4  hover:text-white mx-auto  opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M31.47,22.484c-1.121-2.267-2.605-3.278-4.813-3.278h-5.312c-2.208,0-3.692,1.011-4.815,3.285l-4.612,9.674
		c-0.407,0.83-0.46,1.718-0.155,2.569c0.426,1.186,1.521,2.252,3.016,2.929c2.671,1.152,5.636,1.735,8.81,1.735l0.405-0.003
		l0.421,0.003c3.175,0,6.14-0.584,8.821-1.739c1.485-0.674,2.581-1.74,3.006-2.926c0.305-0.852,0.251-1.739-0.153-2.563
		L31.47,22.484z M35.299,34.396c-0.329,0.919-1.256,1.799-2.47,2.35c-2.546,1.098-5.377,1.653-8.416,1.653l-0.421-0.003
		l-0.405,0.003c-3.038,0-5.869-0.556-8.406-1.649c-1.222-0.555-2.149-1.434-2.479-2.353c-0.215-0.599-0.178-1.201,0.114-1.796
		l4.611-9.673c0.955-1.933,2.089-2.722,3.916-2.722h5.312c1.826,0,2.961,0.789,3.914,2.715l4.616,9.685
		C35.476,33.194,35.514,33.797,35.299,34.396z"
                />
                <path
                  fill="currentColor"
                  d="M42.72,18.372l-4.854-2.46c-1.495-0.663-2.785-0.363-3.948,0.923L31.61,19.37
		c-0.186,0.204-0.171,0.521,0.033,0.706c0.207,0.186,0.521,0.171,0.707-0.033l2.308-2.537c0.87-0.963,1.707-1.167,2.778-0.692
		l4.819,2.443c1.726,0.933,1.31,2.447,0.917,3.25l-5.189,9.702c-0.131,0.243-0.039,0.546,0.205,0.676
		c0.074,0.041,0.155,0.06,0.235,0.06c0.178,0,0.351-0.096,0.44-0.264l5.198-9.717C45,21.05,44.503,19.335,42.72,18.372z"
                />
                <path
                  fill="currentColor"
                  d="M37.287,14.652c0.268,0.007,0.515-0.188,0.534-0.464l0.298-4.267c3.73,2.213,5.33,7.282,5.347,7.336
		c0.065,0.215,0.264,0.353,0.478,0.353c0.049,0,0.098-0.007,0.146-0.022c0.265-0.081,0.412-0.36,0.331-0.624
		c-0.076-0.25-1.928-6.137-6.535-8.296c-0.149-0.07-0.324-0.062-0.465,0.021c-0.143,0.083-0.234,0.232-0.246,0.396l-0.352,5.033
		C36.805,14.394,37.012,14.633,37.287,14.652z"
                />
                <path
                  fill="currentColor"
                  d="M5.734,19.263l4.81-2.438c1.093-0.488,1.93-0.282,2.801,0.682l2.307,2.535
		c0.187,0.205,0.502,0.219,0.706,0.033c0.204-0.186,0.219-0.502,0.033-0.706l-2.305-2.534c-1.162-1.288-2.454-1.591-3.971-0.914
		l-4.845,2.455c-1.744,0.944-2.254,2.701-1.322,4.602l5.189,9.702c0.09,0.168,0.263,0.264,0.441,0.264c0.08,0,0.16-0.019,0.235-0.06
		c0.244-0.13,0.335-0.433,0.205-0.676l-5.181-9.686C4.437,21.704,4.021,20.191,5.734,19.263z"
                />
                <path
                  fill="currentColor"
                  d="M3.912,17.588c0.049,0.015,0.099,0.022,0.147,0.022c0.214,0,0.412-0.138,0.478-0.353
		c0.017-0.054,1.616-5.123,5.346-7.336l0.298,4.267c0.019,0.275,0.255,0.475,0.534,0.464c0.276-0.02,0.483-0.258,0.464-0.534
		l-0.352-5.033c-0.012-0.165-0.104-0.313-0.246-0.396c-0.143-0.084-0.317-0.093-0.466-0.021c-4.605,2.159-6.458,8.046-6.535,8.296
		C3.5,17.228,3.648,17.507,3.912,17.588z"
                />
              </g>
            </svg>
          </div>
          <span class="text-gray-800 font-bold">All</span>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg">
            <svg
              class="w-56 h-56 p-4 text-gray-800 hover:text-white mx-auto  opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M45.685,24.852c-0.378-5.026-7.439-5.795-7.833-5.826c-4.968,0.421-6.538-3.976-6.62-4.203
		c-1.71-3.724-4.516-4.555-4.636-4.589c-1.671-0.469-3.381-0.707-5.083-0.707c-10.458,0-17.715,8.698-18.059,9.124
		c-0.629,1.024-0.956,2.688-1.119,4.439c0,0.002,0,0.004,0,0.006c-0.308,3.325-0.014,6.97,0.006,7.198
		c0.433,5.626,7.794,7.045,8.068,7.093c2.724,0.731,6.047,1.103,9.877,1.103c3.822,0,6.793-0.384,6.799-0.386
		c7.819-0.643,14.171-3.693,14.294-3.759C46.902,30.646,45.689,24.852,45.685,24.852z M4.267,19.23
		c0.071-0.087,7.256-8.703,17.246-8.703c1.61,0,3.229,0.225,4.809,0.668c0.102,0.03,2.493,0.763,3.981,3.998
		c0.017,0.048,1.719,4.861,6.882,4.861c0.243,0,0.493-0.01,0.659-0.033c0.064,0.006,6.526,0.706,6.853,4.976
		c0.022,0.103,0.275,1.35-0.038,2.979c-20.93,5.932-31.307,3.677-36.326,0.739c-4.028-2.357-4.934-5.342-5.011-5.625
		C3.465,21.527,3.745,20.083,4.267,19.23z M40.883,33.48c-0.062,0.03-6.254,3.001-13.903,3.63c-0.028,0.004-2.94,0.38-6.693,0.38
		c-3.743,0-6.979-0.359-9.657-1.076c-0.069-0.014-6.918-1.339-7.292-6.199c-0.003-0.044-0.194-2.406-0.131-5.003
		c0.755,1.245,2.125,2.894,4.569,4.336c2.833,1.672,7.299,3.139,14.252,3.139c5.647,0,12.95-0.979,22.33-3.593
		C43.859,30.551,42.859,32.154,40.883,33.48z"
                />
                <path
                  fill="currentColor"
                  d="M16.871,24.761l5.41-0.008c0.015,0.002,0.373,0.066,0.84,0.066c1.277,0,2.144-0.469,2.419-1.269
		c0.484-1.015,0.888-3.223-1.015-4.376c-0.327-0.305-2.287-2.059-4.333-1.954c-0.099-0.013-0.321-0.036-0.634-0.036
		c-1.088,0-3.833,0.3-5.842,3.129c-0.036,0.065-0.879,1.602-0.17,2.902C14.046,24.135,15.155,24.655,16.871,24.761z M14.56,20.847
		L14.56,20.847c1.648-2.316,3.838-2.662,4.997-2.662c0.319,0,0.516,0.028,0.534,0.031c0.035,0.006,0.073,0.007,0.106,0.005
		l0.145-0.004c1.735,0,3.512,1.7,3.53,1.717c0.029,0.028,0.062,0.053,0.096,0.073c1.655,0.965,0.709,3.027,0.647,3.164
		c-0.305,0.875-1.977,0.618-2.247,0.59l-5.467,0.001c-0.905-0.057-2.069-0.279-2.477-1.021C13.985,21.94,14.564,20.847,14.56,20.847
		z"
                />
              </g>
            </svg>
          </div>
          <span class="text-gray-800 font-bold">Meat & Dairy</span>
        </div>

        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg">
            <svg
              class="w-56 h-56 p-4  text-gray-800 hover:text-white mx-auto my-auto opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M40.041,43.148H7.961c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h32.08c0.276,0,0.5-0.224,0.5-0.5
		S40.317,43.148,40.041,43.148z"
                />
                <path
                  fill="currentColor"
                  d="M40.313,36.664c-0.147-0.152-0.355-0.24-0.571-0.24l-0.754,0.001c-0.422-6.27-5.799-11.5-12.786-12.423
		v-2.336c0-0.435-0.354-0.789-0.791-0.789h-3.193c-0.435,0-0.789,0.354-0.789,0.789v2.383c-6.905,1.052-12.031,6.158-12.44,12.376
		H8.261c-0.441,0-0.8,0.358-0.8,0.799v3.182c0,0.44,0.359,0.799,0.8,0.799h31.481c0.44,0,0.799-0.358,0.799-0.799v-3.184
		C40.541,37.008,40.453,36.8,40.313,36.664z M39.541,40.205H8.461v-2.779h1.004c0.271,0,0.493-0.216,0.5-0.487
		c0.157-6.075,5.221-11.105,12.041-11.96c0.149-0.019,0.286-0.064,0.366-0.19c0.08-0.127,0.104-0.244,0.056-0.386v-2.525h2.773
		v2.471c-0.003,0.013-0.005,0.025-0.006,0.035c-0.017,0.133,0.021,0.268,0.104,0.373c0.084,0.105,0.206,0.172,0.34,0.187
		c6.894,0.716,12.212,5.874,12.37,11.996c0.007,0.271,0.229,0.487,0.5,0.487h0.001l1.03-0.002V40.205z"
                />
                <path
                  fill="currentColor"
                  d="M27.394,18.02c0.095,0.169,0.277,0.272,0.461,0.272c0.079,0,0.157-0.019,0.229-0.059
		c0.241-0.135,0.337-0.418,0.202-0.66c-0.008-0.028-0.013-0.063-0.02-0.1l-0.012-0.125c-0.001-0.098-0.001-0.161,0.019-0.218
		c0.011-0.032,0.019-0.064,0.022-0.098c0.009-0.069,0.067-0.193,0.123-0.313l0.054-0.116c0.043-0.088,0.107-0.173,0.172-0.262
		c0.066-0.091,0.132-0.184,0.191-0.28l0.146-0.16c0.137-0.149,0.278-0.302,0.413-0.469l0.327-0.413
		c0.119-0.153,0.215-0.353,0.298-0.529l0.06-0.126c0.157-0.4,0.251-0.812,0.289-1.267c0.028-0.436,0.015-0.84-0.038-1.168
		c-0.018-0.205-0.056-0.404-0.125-0.682c-0.034-0.149-0.069-0.297-0.106-0.412c-0.091-0.337-0.217-0.648-0.345-0.962
		c-0.127-0.294-0.259-0.565-0.394-0.797c-0.23-0.422-0.5-0.822-0.748-1.114c-0.229-0.289-0.427-0.422-0.464-0.446
		c-0.228-0.148-0.529-0.081-0.682,0.146c-0.151,0.227-0.089,0.535,0.135,0.691c0.001,0,0.1,0.07,0.238,0.244
		c0.125,0.147,0.374,0.467,0.649,0.969c0.121,0.211,0.235,0.448,0.348,0.707c0.104,0.255,0.217,0.527,0.303,0.847
		c0.037,0.112,0.063,0.232,0.091,0.352c0.001,0.004,0.024,0.104,0.025,0.107c0.036,0.142,0.064,0.287,0.082,0.471
		c0.045,0.289,0.057,0.619,0.033,0.973c-0.029,0.348-0.102,0.667-0.208,0.941l-0.047,0.098c-0.058,0.123-0.131,0.276-0.181,0.34
		l-0.319,0.405c-0.119,0.146-0.247,0.284-0.37,0.417l-0.187,0.205c-0.023,0.025-0.044,0.053-0.061,0.083
		c-0.049,0.085-0.108,0.166-0.166,0.244c-0.101,0.14-0.196,0.277-0.267,0.425l-0.053,0.113c-0.083,0.176-0.168,0.356-0.203,0.562
		c-0.061,0.203-0.059,0.382-0.057,0.586c-0.001,0.038,0.02,0.168,0.027,0.206C27.303,17.77,27.325,17.897,27.394,18.02z"
                />
                <path
                  fill="currentColor"
                  d="M17.941,15.956l0.047,0.1c0.085,0.181,0.174,0.367,0.293,0.523l0.331,0.417
		c0.129,0.157,0.265,0.306,0.398,0.45l0.128,0.125c0.066,0.113,0.143,0.22,0.218,0.324c0.065,0.09,0.131,0.176,0.168,0.254
		l0.06,0.129c0.057,0.12,0.115,0.244,0.145,0.402c0.019,0.059,0.02,0.118,0.02,0.218l0.001,0.071l-0.012,0.061
		c-0.006,0.037-0.011,0.071-0.019,0.099c-0.109,0.243-0.008,0.531,0.232,0.652c0.072,0.036,0.148,0.053,0.223,0.053
		c0.184,0,0.36-0.101,0.448-0.276c0.058-0.115,0.079-0.234,0.118-0.443c0.008-0.041,0.011-0.171,0.009-0.213
		c0-0.133,0.001-0.316-0.049-0.444c-0.031-0.223-0.122-0.417-0.21-0.604l-0.059-0.126c-0.066-0.138-0.163-0.276-0.265-0.417
		c-0.057-0.078-0.116-0.159-0.224-0.323l-0.197-0.216c-0.12-0.131-0.244-0.265-0.354-0.4l-0.321-0.404
		c-0.05-0.066-0.122-0.217-0.179-0.338l-0.037-0.075c-0.122-0.307-0.195-0.625-0.222-0.965c-0.023-0.356-0.013-0.687,0.035-1.009
		c0.015-0.15,0.041-0.294,0.083-0.452l0.023-0.101c0.027-0.119,0.053-0.237,0.098-0.375c0.077-0.288,0.187-0.554,0.294-0.821
		c0.112-0.256,0.226-0.495,0.354-0.717c0.271-0.495,0.519-0.814,0.643-0.959c0.179-0.211,0.153-0.526-0.058-0.705
		c-0.21-0.178-0.525-0.152-0.705,0.058c-0.256,0.302-0.525,0.702-0.752,1.117c-0.139,0.241-0.27,0.514-0.416,0.848
		c-0.116,0.287-0.238,0.591-0.318,0.894c-0.047,0.141-0.082,0.29-0.133,0.519c-0.052,0.192-0.088,0.391-0.106,0.572
		c-0.055,0.368-0.069,0.771-0.04,1.206C17.672,15.109,17.767,15.522,17.941,15.956z"
                />
                <polygon
                  fill="currentColor"
                  points="23.438,15.879 23.3,15.995 23.064,16.211 	"
                />
                <path
                  fill="currentColor"
                  d="M23.055,16.201l0.245-0.206l0.501-0.46c-0.051-0.057-0.108-0.121-0.149-0.21
		c-0.073-0.163-0.112-0.319-0.118-0.471c-0.006-0.181-0.003-0.451,0.089-0.738c0.064-0.252,0.178-0.526,0.338-0.819l0.271-0.452
		c0.065-0.095,0.135-0.187,0.206-0.28l0.41-0.606c0.095-0.126,0.13-0.238,0.172-0.362l0.085-0.211
		c0.127-0.373,0.205-0.772,0.223-1.136c0.036-0.421,0.034-0.823-0.006-1.175c-0.028-0.381-0.084-0.766-0.152-1.139
		c-0.068-0.358-0.145-0.707-0.228-1.061L24.834,6.48c-0.048-0.183-0.094-0.358-0.145-0.521c-0.173-0.576-0.329-1.063-0.453-1.383
		c-0.056-0.157-0.106-0.279-0.155-0.397l-0.913,0.408c0.033,0.08,0.077,0.187,0.131,0.336c0.122,0.316,0.269,0.778,0.434,1.327
		c0.047,0.153,0.09,0.316,0.134,0.484l0.106,0.392c0.075,0.318,0.147,0.653,0.213,0.994c0.061,0.334,0.112,0.684,0.139,1.047
		c0.034,0.304,0.036,0.639,0.003,1.014c-0.014,0.286-0.075,0.599-0.177,0.892c-0.027,0.065-0.054,0.129-0.063,0.16
		c-0.018,0.041-0.031,0.08-0.06,0.153l-0.386,0.572c-0.082,0.108-0.163,0.214-0.252,0.347l-0.298,0.495
		c-0.21,0.386-0.354,0.735-0.43,1.039c-0.131,0.404-0.136,0.791-0.128,1.053c0.013,0.283,0.082,0.566,0.208,0.847
		C22.847,15.967,22.982,16.119,23.055,16.201z"
                />
              </g>
            </svg>
          </div>
          <span class="text-gray-800 font-bold">Farm Supplies</span>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg">
            <svg
              class="w-56 h-56 p-4  text-gray-800 hover:text-white mx-auto  opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M41.055,24.009l1.811-8.205c0.028-0.13,0.004-0.267-0.068-0.378c-0.071-0.112-0.186-0.191-0.315-0.219
		c-0.193-0.041-0.396-0.062-0.603-0.062c-2.574,0-5.551,3.292-6.564,4.51c-2.206-2.104-5.823-4.461-11.162-4.844l1.425-2.961
		c0.081-0.168,0.062-0.367-0.05-0.516c-0.11-0.149-0.29-0.223-0.48-0.194c-4.318,0.699-7.169,3.639-7.757,4.294
		c-0.883,0.23-1.709,0.515-2.495,0.829c-0.015,0.005-0.029,0.01-0.043,0.017c-6.222,2.506-9.394,7.228-9.543,7.455
		c-0.109,0.167-0.109,0.382,0,0.549c0.168,0.255,4.175,6.238,12.081,8.298c0.589,0.656,3.439,3.598,7.757,4.296
		c0.027,0.005,0.054,0.007,0.08,0.007c0.156,0,0.306-0.073,0.4-0.201c0.111-0.148,0.131-0.348,0.05-0.516l-1.425-2.963
		c5.337-0.383,8.955-2.739,11.162-4.843c1.014,1.219,3.99,4.511,6.564,4.511c0.206,0,0.409-0.021,0.603-0.062
		c0.13-0.028,0.244-0.106,0.315-0.219c0.072-0.112,0.097-0.248,0.068-0.378L41.055,24.009z M6.241,24.009
		c0.733-0.988,3.518-4.405,8.222-6.516v13.029C9.759,28.412,6.974,24.997,6.241,24.009z M35.754,27.314
		c-0.088-0.115-0.221-0.187-0.365-0.195c-0.146-0.011-0.285,0.045-0.388,0.148c-2.125,2.158-5.871,4.774-11.642,4.978
		c-0.169,0.006-0.323,0.097-0.41,0.241c-0.087,0.145-0.096,0.323-0.023,0.476l1.311,2.725c-3.831-0.992-6.263-3.841-6.289-3.872
		c-0.068-0.08-0.159-0.138-0.261-0.163c-0.781-0.197-1.52-0.439-2.224-0.711V17.075c0.704-0.271,1.443-0.513,2.224-0.71
		c0.102-0.026,0.193-0.083,0.261-0.164c0.026-0.031,2.447-2.877,6.289-3.87l-1.311,2.723c-0.073,0.152-0.064,0.331,0.023,0.475
		c0.087,0.145,0.241,0.235,0.41,0.241c5.773,0.204,9.517,2.821,11.642,4.98c0.102,0.103,0.226,0.157,0.388,0.148
		c0.144-0.009,0.277-0.08,0.365-0.195c0.955-1.246,3.864-4.444,6.012-4.555l-1.711,7.752c-0.016,0.071-0.016,0.145,0,0.216
		l1.711,7.752C39.618,31.758,36.709,28.56,35.754,27.314z"
                />
                <circle fill="currentColor" cx="10.667" cy="23.925" r="0.875" />
              </g>
            </svg>
          </div>
          <span class="text-gray-800 font-bold">Compost</span>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg">
            <svg
              class="w-56 h-56 p-4  text-gray-800 hover:text-white mx-auto  opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <path
                fill="currentColor"
                d="M36.953,23.509c-0.646,0-1.242,0.21-1.732,0.56c-0.009,0.005-0.019,0.006-0.027,0.012
	c-0.016,0.012-0.024,0.029-0.039,0.042c-0.599,0.453-1.022,1.119-1.152,1.889h-12.23V24.51c0-5.498-1.738-7.08-3.007-8.235
	c-0.78-0.71-1.251-1.139-1.175-2.272c0.157-2.362-0.163-4.481-0.396-6.029c-0.117-0.77-0.217-1.435-0.228-1.917
	c-0.036-1.725,0.081-2.092,0.092-2.13c0.316-0.356,0.226-0.809-0.02-1.055c-0.262-0.262-0.978-0.395-2.129-0.395
	s-1.867,0.133-2.129,0.395c-0.246,0.246-0.336,0.699-0.045,1.021c0.037,0.071,0.153,0.439,0.117,2.163
	c-0.01,0.482-0.111,1.148-0.227,1.919c-0.233,1.547-0.553,3.666-0.397,6.027c0.076,1.134-0.395,1.563-1.175,2.272
	c-1.269,1.155-3.007,2.738-3.007,8.235l0,17.461c-0.006,0.135-0.039,1.338,0.667,1.941c0.563,0.487,1.88,1.629,6.195,1.629
	s5.633-1.142,6.239-1.667c0.663-0.565,0.63-1.769,0.625-1.882v-8.385l4.188,4.506l-0.014,6.428h-2.418c-0.276,0-0.5,0.224-0.5,0.5
	s0.224,0.5,0.5,0.5h2.917h0.001h2.762c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-2.261l0.014-6.552l8.345-8.971
	c0.488,0.321,1.057,0.499,1.648,0.499c1.657,0,3.006-1.349,3.006-3.006C39.959,24.856,38.61,23.509,36.953,23.509z M38.404,25.136
	l-1.306,0.725l-0.875-1.209c0.227-0.089,0.472-0.143,0.729-0.143C37.525,24.509,38.038,24.751,38.404,25.136z M35.417,25.243
	l0.557,0.769h-0.951C35.097,25.725,35.233,25.465,35.417,25.243z M34.928,27.955c-0.018,0.015-0.039,0.022-0.056,0.04
	s-0.023,0.04-0.037,0.06l-1.714,1.843H19.688l-2.682-2.886h18.799L34.928,27.955z M26.402,37.12l-5.784-6.223h11.573L26.402,37.12z
	 M11.726,17.014c0.827-0.752,1.607-1.463,1.5-3.078c-0.149-2.253,0.148-4.227,0.388-5.812c0.122-0.805,0.226-1.5,0.238-2.047
	c0.03-1.46-0.036-2.144-0.172-2.515c0.218-0.042,0.598-0.085,1.229-0.085c0.645,0,1.027,0.045,1.231,0.078
	c-0.138,0.37-0.205,1.053-0.175,2.522c0.012,0.546,0.117,1.241,0.239,2.045c0.239,1.585,0.538,3.559,0.387,5.813
	c-0.107,1.615,0.673,2.326,1.5,3.078c1.068,0.972,2.365,2.165,2.629,6.017C14.5,24.66,10.21,23.454,9.095,23.066
	C9.353,19.187,10.655,17.989,11.726,17.014z M20.449,43.156c-0.479,0.414-1.599,1.385-5.541,1.385s-5.062-0.971-5.589-1.427
	c-0.209-0.179-0.288-0.763-0.274-1.122v-1.257c1.106,0.339,3.496,0.952,6.298,0.952c1.722,0,3.597-0.257,5.429-0.927v1.252
	C20.786,42.352,20.708,42.936,20.449,43.156z M20.772,39.705c-4.879,1.948-10.403,0.405-11.727-0.021V24.51
	c0-0.14,0.005-0.267,0.007-0.401c0.923,0.298,2.789,0.77,5.448,0.77c1.762,0,3.877-0.228,6.263-0.833
	c0.003,0.155,0.009,0.303,0.009,0.465v1.502h-4.913c-0.199,0-0.379,0.118-0.458,0.3c-0.079,0.183-0.043,0.395,0.092,0.541
	l5.289,5.689c-0.002,0.017-0.01,0.031-0.01,0.048L20.772,39.705z M36.003,28.269l0.898-0.966l0.778,1.074
	c-0.226,0.088-0.47,0.141-0.727,0.141C36.617,28.518,36.294,28.426,36.003,28.269z M38.489,27.787l-0.804-1.109l1.202-0.667
	c0.042,0.161,0.071,0.327,0.071,0.501C38.959,26.998,38.778,27.439,38.489,27.787z"
              />
            </svg>
          </div>
          <span class="text-gray-800 font-bold">Beverages</span>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg">
            <svg
              class="w-56 h-56 p-4  text-gray-800 hover:text-white mx-auto  opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M32.601,44.555H18.166c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h14.435c0.276,0,0.5-0.224,0.5-0.5
		S32.877,44.555,32.601,44.555z"
                />
                <path
                  fill="currentColor"
                  d="M44.986,22.76H16.582L7.921,2.764c-0.11-0.253-0.402-0.369-0.658-0.26c-0.253,0.11-0.37,0.404-0.26,0.658
		l8.488,19.598h-1.276L3.392,10.495c-0.184-0.207-0.499-0.226-0.706-0.044c-0.207,0.183-0.227,0.499-0.044,0.706L12.881,22.76H4.986
		c-0.133,0-0.26,0.053-0.354,0.146s-0.146,0.221-0.146,0.354c0,0.923,0.067,1.88,0.204,2.867l0.345,1.841
		c0.051,0.215,0.12,0.421,0.177,0.632c0,0.086,0.027,0.163,0.065,0.233C7.76,37.661,15.729,43.76,24.986,43.76
		c9.25,0,17.211-6.087,19.704-14.923c0.04-0.071,0.068-0.149,0.068-0.237c0-0.001-0.001-0.002-0.001-0.003
		c0.059-0.219,0.131-0.43,0.183-0.651l0.345-1.841c0.134-0.959,0.202-1.917,0.202-2.845C45.486,22.983,45.263,22.76,44.986,22.76z
		 M44.479,23.76c-0.02,0.724-0.081,1.46-0.182,2.184l-0.336,1.796c-0.028,0.122-0.07,0.239-0.101,0.36H6.108
		c-0.029-0.114-0.068-0.223-0.095-0.338l-0.337-1.795c-0.103-0.745-0.164-1.486-0.184-2.207H44.479z M24.986,42.76
		c-8.625,0-16.08-5.561-18.597-13.66H43.58C41.055,37.207,33.604,42.76,24.986,42.76z"
                />
              </g>
            </svg>
          </div>
          <span class="text-gray-800 font-bold">Easy Meals</span>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg">
            <svg
              class="w-56 h-56 p-4  text-gray-800 hover:text-white mx-auto  opacity-75"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M21.219,22.661c0,4.053-4.078,4.248-4.222,4.254c-0.173-0.005-4.25-0.184-4.25-4.254
		c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5c0,5.027,5.166,5.252,5.254,5.254c0.052-0.002,5.218-0.227,5.218-5.254
		c0-0.276-0.224-0.5-0.5-0.5S21.219,22.385,21.219,22.661z"
                />
                <path
                  fill="currentColor"
                  d="M11.336,15.288c0.012,0,0.024,0,0.036,0c0.027,0.75,0.043,1.727,0.062,2.761
		c0.019,1.093,0.039,2.25,0.073,3.274c0.009,0.27,0.229,0.483,0.5,0.483l5.083,0.001l4.789-0.001c0.275,0,0.498-0.222,0.5-0.496
		c0-0.038,0.028-3.531-0.042-6.021c0.006,0,0.013,0,0.019,0c2.078,0,3.769-1.691,3.769-3.77s-1.691-3.77-3.769-3.77
		c-0.221,0-0.44,0.019-0.656,0.057c-0.848-1.899-2.744-3.147-4.852-3.147s-4.003,1.248-4.852,3.147
		c-0.217-0.038-0.437-0.058-0.658-0.058c-2.078,0-3.768,1.691-3.768,3.77S9.259,15.288,11.336,15.288z M21.38,20.806l-4.292,0.001
		l-4.598-0.001c-0.011-0.406-0.021-0.83-0.029-1.256h8.921C21.383,20.058,21.382,20.497,21.38,20.806z M11.336,8.749
		c0.277,0,0.552,0.041,0.816,0.123c0.256,0.079,0.531-0.06,0.619-0.314c0.603-1.733,2.24-2.898,4.075-2.898s3.472,1.165,4.075,2.898
		c0.088,0.254,0.361,0.392,0.62,0.313c0.262-0.081,0.535-0.122,0.813-0.122c1.527,0,2.769,1.242,2.769,2.77s-1.242,2.77-2.769,2.77
		c-0.155,0-0.306-0.013-0.455-0.038c-0.15-0.025-0.3,0.019-0.412,0.118c-0.113,0.099-0.175,0.244-0.169,0.394
		c0.042,1.115,0.058,2.545,0.063,3.788h-8.938c-0.003-0.173-0.006-0.349-0.009-0.519c-0.023-1.324-0.044-2.556-0.086-3.345
		c-0.008-0.142-0.075-0.274-0.186-0.363c-0.11-0.089-0.253-0.128-0.394-0.104l-0.169,0.032c-0.086,0.017-0.172,0.038-0.262,0.038
		c-1.526,0-2.768-1.242-2.768-2.77S9.811,8.749,11.336,8.749z"
                />
                <path
                  fill="currentColor"
                  d="M37.895,32.825l-7.434,0.004c-0.134,0-0.262,0.054-0.355,0.148l-2.621,2.645l-0.776-3.761
		c-0.223-1.083-0.624-2.146-2.03-2.589l-3.572-1.172c-0.259-0.089-0.538,0.052-0.628,0.31l-3.444,9.854l-3.619-9.861
		c-0.093-0.254-0.369-0.389-0.625-0.303l-3.567,1.17c-1.412,0.444-1.813,1.508-2.044,2.637l-1.09,9.99
		c-0.016,0.142,0.03,0.283,0.125,0.389c0.095,0.105,0.23,0.166,0.372,0.166h16.709c0.276,0,0.5-0.224,0.5-0.5v-1.221l0.505,1.724
		c0.206,0.667,1.032,0.904,1.737,0.904c0.72,0,1.362-0.23,1.77-0.638l6.422-6.642c1.896-0.13,3.171-0.618,3.792-1.451
		c0.515-0.689,0.378-1.347,0.36-1.42C38.327,32.984,38.126,32.825,37.895,32.825z M37.2,34.057
		c-0.266,0.336-1.037,0.918-3.224,1.037c-0.126,0.007-0.244,0.061-0.332,0.151l-6.551,6.775c-0.209,0.209-0.614,0.339-1.057,0.339
		c-0.494,0-0.752-0.155-0.779-0.192l-1.482-5.063c-0.063-0.216-0.261-0.359-0.479-0.359c-0.023,0-0.047,0.002-0.071,0.005
		c-0.247,0.035-0.429,0.246-0.429,0.495v4.207h-12v-3.414c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v3.414H7.144l1.022-9.39
		c0.202-0.979,0.478-1.562,1.363-1.841l3.113-1.021l3.934,10.718c0.072,0.198,0.236,0.308,0.473,0.328
		c0.211-0.002,0.398-0.136,0.468-0.335l3.742-10.709l3.112,1.021c0.879,0.277,1.156,0.86,1.358,1.84l0.965,4.674
		c0.037,0.18,0.17,0.325,0.347,0.378c0.175,0.051,0.367,0.003,0.498-0.128l3.131-3.158l6.67-0.004
		C37.309,33.898,37.264,33.977,37.2,34.057z"
                />
                <path
                  fill="currentColor"
                  d="M41.416,30.938H27.893c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h13.523c0.276,0,0.5-0.224,0.5-0.5
		S41.692,30.938,41.416,30.938z"
                />
                <path
                  fill="currentColor"
                  d="M28.725,30.222h11.828c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-0.395
		c-0.239-2.653-2.355-4.771-5.008-5.01v-0.631c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v0.631
		c-2.653,0.239-4.771,2.356-5.01,5.01h-0.416c-0.276,0-0.5,0.224-0.5,0.5S28.448,30.222,28.725,30.222z M34.65,25.187
		c2.329,0,4.23,1.771,4.482,4.035h-8.967C30.418,26.958,32.32,25.187,34.65,25.187z"
                />
              </g>
            </svg>
          </div>
          <span class="text-gray-800 font-bold">Premade</span>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg"></div>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg"></div>
        </div>
        <div class="py-6 text-center focus:outline-none border-8 border-white px-1">
          <div class=" bg-gray-200 h-auto -pb-8 w-full  py-1 mx-auto text-gray-800  hover:bg-green-500 border-2 border-transparent hover:text-white  mb-4 rounded-lg hover:shadow-lg"></div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
