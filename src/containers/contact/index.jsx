import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const form = useRef(); //declaring form with hook

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const user_name = document.querySelector(".inputName").value;
    const user_email = document.querySelector(".inputEmail").value;
    const description = document.querySelector(".inputDescription").value;

    console.log("Name:", user_name);
    console.log("Email:", user_email);
    console.log("Description:", description);

    emailjs
      .sendForm(
        "service_c2ao1d8",
        "template_5m6ciih",
        form.current,
        "oxm_k88W-Gok4RPq8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the input fields if needed
    document.querySelector(".inputName").value = "";
    document.querySelector(".inputEmail").value = "";
    document.querySelector(".inputDescription").value = "";
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            ref={form}
            onSubmit={handleFormSubmit}
            className="contact__content__form"
          >
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={handleFormSubmit}>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
