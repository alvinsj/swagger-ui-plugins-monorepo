import * as fs from 'fs';
import { ServiceProvider } from 'samlify'
import path from 'path';

import * as samlify from 'samlify';
import * as validator from '@authenio/samlify-xsd-schema-validator';
samlify.setSchemaValidator(validator);


const libDirectory = path.join(process.cwd(), 'src/lib');

const sp = new ServiceProvider({
  // required
  entityID: 'http://localhost:8090/api/auth/saml/metadata',
  authnRequestsSigned: true,
  privateKey: fs.readFileSync(libDirectory + '/private_key.key') 
});

export default sp