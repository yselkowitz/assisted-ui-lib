import { ClusterCreateParams, OpenshiftVersion } from '../api/types';

export type OpenshiftVersionOptionType = {
  label: string;
  // effectively OpenshiftVersions key (means :string)
  value: ClusterCreateParams['openshiftVersion'];
  version: string;
  default: boolean;
  supportLevel: OpenshiftVersion['supportLevel'];
};
