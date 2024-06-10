import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data4validation = useActionData(); //validation
  const isSubmitting = navigation.state === 'submitting'
  function cancelHandler() {
    navigate('..');
  }

  const getValue = (event, key) => event?.[key] ? event[key] : ''

  return (
    <Form className={classes.form} method='post'>
      {data4validation?.['errors'] &&
        (<ul>{Object.values(data4validation.errors).map(err => <li key={err}>{err}</li>)}</ul>)
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={getValue(event, 'title')} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={getValue(event, "image")} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={getValue(event, "date")} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={getValue(event, "description")} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disable>{isSubmitting ? 'submitting..' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
