import React, { useState } from "react";

import { FaWallet } from "react-icons/fa";
import { makeStyles, Switch } from "@material-ui/core";
import createFormStyle from "../../assets/jss/creatorStyle/createFormStyle.js";
import ButtonCreate from "./ButtonCreate.js";
import WalletCreator from "./WalletCreator.js";

const useStyles = makeStyles(createFormStyle);

export default function Navigate() {
  const classes = useStyles();
  const [online, setOnline] = useState(false);
  const [onsite, setOnsite] = useState(false);
  const [exp, setExp] = useState(false);
  const [assessment, setAssessment] = useState(false);
  const [qualifications, setQualifications] = useState(false);

  return (
    <div className={classes.createFormContainer}>
      <h2 className={classes.title}>create</h2>
      <div>
        <label>Title</label>
        <input className={classes.createForm_input} placeholder="Name" />
      </div>
      <div>
        <label>External link of your digital content</label>
        <input
          className={classes.createForm_input}
          placeholder="https://www.yoursite.com/item"
        />
      </div>
      <div>
        <label>Upload your digital certificate avatar</label>
        <input
          className={classes.input_upload}
          type="file"
          id="file"
          placeholder="https://www.yoursite.com/item"
        />
        <label htmlFor="file" className={classes.label_upload}>
          Upload
        </label>
      </div>
      <div>
        <label>Royalties</label>
        <input className={classes.createForm_input} />
      </div>
      <div>
        <div>
          <label>Description</label>
          <textarea
            className={classes.createForm_textarea}
            placeholder="Description here"
            maxLength="140"
          />
        </div>
      </div>

      <h4 className={classes.title}>Learner activity:</h4>

      <div className={classes.switch_option}>
        <span
          className={
            online === false
              ? classes.switch_title
              : classes.switch_title_active
          }
        >
          online
        </span>
        <Switch
          onClick={() => {
            setOnline(!online);
          }}
          style={{ color: online ? "red" : "black" }}
        />
      </div>
      <div className={classes.switch_option}>
        <span
          className={
            onsite === false
              ? classes.switch_title
              : classes.switch_title_active
          }
        >
          onsite
        </span>
        <Switch
          onClick={() => {
            setOnsite(!onsite);
          }}
          style={{ color: onsite ? "red" : "black" }}
        />
      </div>
      <div className={classes.switch_option}>
        <span
          className={
            exp === false ? classes.switch_title : classes.switch_title_active
          }
        >
          work experience
        </span>
        <Switch
          onClick={() => {
            setExp(!exp);
          }}
          style={{ color: exp ? "red" : "black" }}
        />
      </div>

      <h4 className={classes.title}>If applicable:</h4>

      <div className={classes.switch_option}>
        <span
          className={
            assessment === false
              ? classes.switch_title
              : classes.switch_title_active
          }
        >
          assessment
        </span>
        <Switch
          onClick={() => {
            setAssessment(!assessment);
          }}
          style={{ color: assessment ? "red" : "black" }}
        />
      </div>
      <div className={classes.switch_option}>
        <span
          className={
            qualifications === false
              ? classes.switch_title
              : classes.switch_title_active
          }
        >
          qualifications framework level
        </span>
        <Switch
          onClick={() => {
            setQualifications(!qualifications);
          }}
          style={{ color: qualifications ? "red" : "black" }}
        />
      </div>
      <div>
        <input
          disabled={qualifications ? false : true}
          className={classes.createForm_input}
        />
      </div>
      <div className={classes.createFormSave}>
        <ButtonCreate> MINT </ButtonCreate>
      </div>
      <div className={classes.createFormBlockchainGrid}>
        <div>
          <WalletCreator />
        </div>
      </div>
    </div>
  );
}
