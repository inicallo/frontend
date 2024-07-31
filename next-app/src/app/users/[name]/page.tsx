export default function UserDetailPage({ params }: { params: {name:string}}) {
    return (
        <div>
            <h1>User Detail : {params.name}</h1>
        </div>
    )
}