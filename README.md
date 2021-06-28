[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://tinyurl.com/hcpairing">
    <img src="https://i.imgur.com/ZAr4P5D.png" alt="Logo" width="267" height="150">
  </a>

  <h3 align="center">HCPairing</h3>

  <p align="center">
    Bridge the gap between underserved communities and healthcare providers.
    <br />
    <a href="https://tinyurl.com/hcpairing"><strong>Explore the services »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RainrainWu/hcpairing-frontend">View Demo</a>
    ·
    <a href="https://github.com/RainrainWu/hcpairing-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/RainrainWu/hcpairing-frontend/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

It is very difficult for underserved communities to access the right healthcare provider with the specialties for their symptoms. So we try to design the journey to bridge the gap between them.

### Built With

The project is mainly built with the well-known frameworks and libraires like [React.js](https://reactjs.org/), [Redux](https://redux.js.org/), [Material-UI](https://material-ui.com/).

* Based on the requirements above, we decide to build a website with a human-friendly interface as the implementation. We simply divide the service into frontend and backend, the former includes SDK integration and UI presentation, and the latter contains the conversion system and storagement.
* The project is driven by the Scrumban cycle, we maintain a public bulletin board and a knowledge base using HackMD throughout the development, it allows us to converge ideas quickly and control the schedule and resources.
* We finally deploy the service on Microsoft Azure via CI CD pipeline, maintaining the equipment by ourselves is too much trouble for us, the free quota of public cloud is a great choice for the hackathon.

<!-- GETTING STARTED -->
## Getting Started

Besides using the published version, you can compile your own and make pull requests if you think this project can be better!

### Prerequisites


|          | Version  |
| -------- | -------- | 
|[Node.js](https://nodejs.org/en/) | v14.17.0 |
|[Npm](https://www.npmjs.com/) | v6.14.13 |
|[React](https://reactjs.org/) | v17.0.2 |
|[TypeScript](https://www.typescriptlang.org/) | v4.3.2 |
|[Redux](https://redux.js.org/) | v7.2.4 |
|[Material-UI](https://material-ui.com/) | v4.11.4 |


### Step one - Clone the repo
`git clone https://github.com/RainrainWu/hcpairing-frontend.git`
### Step two - Install dependencies
`npm install`
### Step three - Build
`npm run build-dev`

The code will be generated in `dist/` directory in development mode

or

`npm run build`

The code will be generated in `build/` disrectory in production mode

### Step four - Host with http-server
`npx http-server ./build -p [port]`

Be sure that you have already installed npx through `npm install -g npx`.



<!-- USAGE EXAMPLES -->
## Usage

Users can pick the tags that describe their symptoms well, our service will help them convert into corresponding healthcare specialties, and display the candidates of healthcare providers which meet their needs.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/RainrainWu/hcpairing-frontend/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please follow the instructions below to start contributing to our project:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

* Chun-Hao Huang - [@f26401004](https://github.com/f26401004) - f26401004@gmail.com
* Cheng-Feng Wu - [@RainrainWu](https://github.com/RainrainWu) - s0958334772@gmail.com

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Best README Template](https://github.com/othneildrew/Best-README-Template)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RainrainWu/hcpairing-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/RainrainWu/hcpairing-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RainrainWu/hcpairing-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/RainrainWu/hcpairing-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/RainrainWu/hcpairing-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/RainrainWu/hcpairing-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/RainrainWu/hcpairing-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/RainrainWu/hcpairing-frontend/issues
[license-shield]: https://img.shields.io/github/license/RainrainWu/hcpairing-frontend.svg?style=for-the-badge
[license-url]: https://github.com/RainrainWu/hcpairing-frontend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/f26401004
[product-screenshot]: images/screenshot.png