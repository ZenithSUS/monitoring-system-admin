import { useFetchUser } from "@/hooks/users";
import { User } from "lucide-react";
import { useParams } from "react-router";

function UserDetails() {
  const params = useParams();
  const { data: user, isLoading } = useFetchUser(params.userId!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center uppercase text-xl font-bold">User Details</h1>
      <p className="text-center text-sm text-neutral-400">
        Here you can see the details of a user.
      </p>
      <div className="relative my-10 p-5 rounded-xl border border-black space-y-5">
        <span className="bg-amber-400 rounded-full px-3 py-2 absolute">
          {user.department}
        </span>
        <div className="border border-black rounded-full p-5 mx-auto w-24 aspect-square flex items-center justify-center">
          <User className="h-full w-full" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-sm text-neutral-500">{user.email}</p>
          <p className="uppercase font-bold text-lg">
            {user.lastName}, {user.firstName}{" "}
            {user.middleName === "N/A" ? "" : user.middleName}
          </p>
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
