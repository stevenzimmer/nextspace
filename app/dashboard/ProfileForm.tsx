"use client";


// export async function generateMetadata({params}: Props): Promise<Metadata> {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: params.id
//     }
//   });

//   return  {
//     title: `User Profile of ${user?.name} | NextSpace`
//   }

// }


export function ProfileForm({user}: any) {
  const updateUser = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image")
    }

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });

    await res.json();

    console.log({user});

  };
  return (
    <div>
      <h2>
        Edit your profile
      </h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={user?.name ?? ''} />
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" cols="30" rows="10" defaultValue={user?.bio ?? ''}></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image Url</label>
        <input type="text" name="image" defaultValue={user?.image ?? ''} />
        <button className="p-3 rounded bg-blue-100 border-2 px-3 py-1" type="submit">Save</button>
      </form>
     
    </div>
  )
}