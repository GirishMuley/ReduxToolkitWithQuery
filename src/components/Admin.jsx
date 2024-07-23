import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading, isSucces } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  console.log(error);
  return (
    <>
      <h4>
        <b>Admin Component</b>
      </h4>
      {isLoading ? <p>Loading</p> : null}
      {data &&
        data.map((account) => (
          <p>
            {account.id} : {account.amount}
            <button onClick={() => deleteAccount(account.id)}>
              Delete Account
            </button>
            <button
              onClick={() => updateAccount({ id: account.id, amount: 333 })}
            >
              Update Account
            </button>
          </p>
        ))}
      <button onClick={() => addAccount(102, data.length + 1)}>
        Add Account
      </button>
    </>
  );
}

export default Admin;
