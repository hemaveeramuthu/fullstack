import 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <h3>Contact Us</h3>
                <form style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your message" style={styles.textarea}></textarea>
                    </div>
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formGroup: {
        marginBottom: '15px',
        width: '100%',
        maxWidth: '400px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '80px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Footer;
