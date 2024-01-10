type Props = {
    "id": number,
    "title": string,
    "images": string[]
}

export const PROPSNAME = ({ id, title, images}:Props ) => {

    return (
        <>
            <article className={styles.card} key={id}>
                <Link href={`/${id}`}>
                    <div className={styles.cardImg}>
                        <Image
                            src={images[2]}
                            width={value}
                            height={value}
                            alt={''}/>
                    </div>
                    <div>{title}</div>

                </Link>
            </article>
        </>
    );
}