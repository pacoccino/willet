import React from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';
import Button from 'js/components/ui/Button';

import styles from './style.scss';

function ChangeName({ handleSubmit, pristine, submitting, submitSucceeded, submitFailed }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Change username</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <Field
            name="username"
            component={Input}
            type="text"
            label="Username"
          />
          {!(pristine || submitting) &&
          <Button disabled={pristine || submitting} onClick={handleSubmit}/>
          }
        </div>
      </form>
      {submitSucceeded &&
      <span className={styles.messageSuccess}>Username successfully changed !</span>
      }
      {submitFailed &&
      <span className={styles.messageError}>There was an error while changing your username...</span>
      }
    </div>
  );
}

ChangeName.propTypes = {
  ...propTypes,
};

export default ChangeName;
