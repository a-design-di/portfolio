import css from "styled-jsx/css";

export default css.resolve`
  .section-title {
    font-size: 36px;
    line-height: 48px;
  }

  .section-subtitle {
    margin-top: 9px;
    line-height: 28px;
  }

  .section-btn {
    margin-top: 20px;
    padding: 16px;
    color: #2790dd;
    display: inline-block;
    border: 2px solid #2790dd;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
  }

  .leftsection {
    padding-top: 0;
  }

  @media only screen and (min-width: 768px) {
    .leftsection,
    .rightsection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .carousel-page {
      right: 48px;
      min-height: 50vh;
      flex: 1;
    }
    .carousel {
      flex: 1;
      margin: auto;
      display: flex;
      min-height: 50vh;
      align-items: stretch;
      flex-direction: row-reverse;
    }
    .slick {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }
    .dot {
      width: 8px;
      height: 16px;
      background: #565a6f;
      border-radius: 8px;
    }
    .dot[active="active"] {
      width: 8px;
      height: 16px;
      background: #ffffff;
      border-radius: 8px;
    }
    .slick-gap {
      width: 40px;
    }
    .content-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
    }
    .carousel-page-content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row-reverse;
      
    }
  }
  @media only screen and (max-width: 768px) {
    .carousel-page-content {
      display: flex;
      align-items: stretch;
      justify-content: center;
      flex-direction: column;
      min-height: calc(100vh - 44px);
      box-sizing: border-box;
    }
    .leftsection {
      padding-top: 16px;
    }
    .section-title {
      display: inline;
      font-size: 36px;
    }
  }
`;
