import { useAuth } from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import TransformationForm from "@/components/shared/TransformationForm";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async({params :{type}}: SearchParamProps) => {
  const { userId } = useAuth();
  const transformation = transformationTypes[type];

  if (!userId) {
    redirect('/sign-in')
  }

  const user = await getUserById(userId);



  return (
    <>
    <Header 
      title={transformation.title} 
      subtitle={transformation.subTitle} 
    />
    <TransformationForm
      action="Add"
      userId={user._id}
      type={transformation.type as TransformationTypeKey}
      creditBalance={user.creditBalance} />
    </>
  );
};

export default AddTransformationTypePage;