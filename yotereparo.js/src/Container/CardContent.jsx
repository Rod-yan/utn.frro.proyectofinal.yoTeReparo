import CardElement from "./Card";
import React from "react";
import { Link } from "react-router-dom";

function CardContent(props) {
  return (
    <>
      <CardElement>
        <div className="row">
          <div className="col-12">
            <div className="home-icon-logo text-center">
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i
                  class={`fas ${props.cardIcon} fa-stack-1x home-icon-color`}
                ></i>
              </span>
              <hr></hr>
            </div>

            <div className="home-text-welcome">{props.cardDescription}</div>
            <div className="text-center">
              <Link to={props.cardUrl}>
                <button
                  type="button"
                  className={`btn btn-${props.cardButtonStyle}`}
                >
                  <strong>{props.cardButtonText}</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </CardElement>
    </>
  );
}

export default CardContent;
