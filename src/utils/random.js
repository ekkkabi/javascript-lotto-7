import { MissionUtils } from '@woowacourse/mission-utils';

const Random = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};
export default Random;
