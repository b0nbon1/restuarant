import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerDefinition from '../../docs';

const specs = swaggerJsdoc(swaggerDefinition);
const router = express.Router();
// const prefix = '/api/v1';
const apiDocs = '/api/docs';
const specsConfig = setup(specs, {
  explorer: false,
  customeSiteTitle: 'Barefoot Nomad API',
});

router.use(apiDocs, serve);
router.use(apiDocs, specsConfig);

export default router;
