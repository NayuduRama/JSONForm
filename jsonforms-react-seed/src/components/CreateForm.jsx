import { Fragment, useState, useEffect } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'; 
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import axios from 'axios';

import RatingControl from '../RatingControl';
import '../App.css';
// import schema from '../schema.json';
// import uischema from '../uischema.json';
import ratingControlTester from '../ratingControlTester';

const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1
    },
    "email": {
      "type": "string",
      "minLength": 5
    },
    "password": {
      "minLength": 5,
      "type": "string"
    },
    "Address": {
      "minLength": 10,
      "type":"string"
    }
  },
  "required": ["name", "password", "email"]
};

const uischema = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "scope": "#/properties/name"
    },

    {
      "type": "Control",
      "scope": "#/properties/email"
    },
    {
      "type": "Control",
      "scope": "#/properties/password"
    }
    // ,
    // {
    //   "type": "Control",
    //   "scope": "#/properties/Address"
    // }
  ]
};

const useStyles = makeStyles((_theme) => ({
  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto',
    display: 'block',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
}));

const initialData = {
  name: 'User Name',
  email: 'Enter your email',
  password: 'Password',
};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
];

const CreateForm = () => {
  const classes = useStyles();
  const [displayDataAsString, setDisplayDataAsString] = useState('');
  const [jsonformsData, setJsonformsData] = useState(initialData);

  useEffect(() => {
    setDisplayDataAsString(JSON.stringify(jsonformsData, null, 2));
  }, [jsonformsData]);

  const clearData = () => {
    setJsonformsData({});
  };
  const submitData = () => {
    const user = {
      name: jsonformsData.name,
      email: jsonformsData.email,
      password: jsonformsData.password,
    };   
    // axios.post('/api/users', user).then((res) => console.log(res.data));
    console.log(JSON.parse(JSON.stringify(jsonformsData)));
    console.log(user);
  }; 

  return (
    <Fragment>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to JSON Forms with React</h1>
          <p className='App-intro'>More Forms. Less Code.</p>
        </header>
      </div>

      <Grid
        container
        justify={'center'}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={6}>
          <Typography variant={'h3'} className={classes.title}>
            JSON Form
          </Typography>
          <div className={classes.dataContent}>
            <pre id='boundData'>{displayDataAsString}</pre>
          </div>
          <Button
            className={classes.resetButton}
            onClick={clearData}
            color='primary'
            variant='contained'
          >
            Clear data
          </Button>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={'h3'} className={classes.title}>
            Rendered form
          </Typography>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={jsonformsData}
              renderers={renderers}
              cells={materialCells}
              onChange={({ errors, data }) => setJsonformsData(data)}
            />
            <Button
              className={classes.resetButton}
              onClick={submitData}
              color='primary'
              variant='contained'
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid> 
      </Fragment>
  );
};

export default CreateForm;