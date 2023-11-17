import '../../styles/signUp.css';
export function FormError (props: any) {
    return (
        <p className='form-error'>{props.error}</p>
    )
}