import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import { firestore } from "../../../firebase/clientApp";
import { Community } from "../../../atoms/CommunitiesAtom";
import safeJsonStringify from "safe-json-stringify";
import Head from "next/head";
import CommunityNotFound from "../../../components/Community/CommunityNotFound";
import Header from "../../../components/Community/Header";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPageProps: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log(communityData);

  if (!communityData) {
    return <CommunityNotFound />;
  }

  return (
    <>
      <Header communityData={communityData} />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  //get community data and pass it to client
  try {
    const communityDocRef = doc(firestore, "communities", context.query.communityId as string);
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }))
          : "",
      },
    };
  } catch (error) {
    //Could add error page here
    console.log(`getServerSideProps error`, error);
  }
}

export default CommunityPageProps;
