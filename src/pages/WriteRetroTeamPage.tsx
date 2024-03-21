import CheckPopUp from '../components/writeRetro/CheckPopUp';
import SubTitle from '@/components/writeRetro/SubTitle';

function WriteRetroTeamPage() {
  return (
    <>
      <Title title="First Retro"></Title>
      <SubTitle subTitle="첫 회고 진행 - 앞으로 남은 회고는 2번!"></SubTitle>
      <SaveButton></SaveButton>
      <CheckPopUp></CheckPopUp>
      <WriteRetroKudos></WriteRetroKudos>
      <WriteRetroWentWell></WriteRetroWentWell>
      <WriteRetroToImprove></WriteRetroToImprove>
      <WriteRetroActionItems></WriteRetroActionItems>
    </>
  );
}

export default WriteRetroTeamPage;
