document.addEventListener('DOMContentLoaded', () => {
    checkConnectionStatus();

    document.getElementById('connectButton').addEventListener('click', () => {
        initiateConnection();
    });

    document.getElementById('disconnectButton').addEventListener('click', () => {
    
        disconnectConnection();
    });
});

async function checkConnectionStatus() {
    try {
        
        const response = await fetch('/connection/status');
        if (response.ok) {
            const { isConnected } = await response.json();
            if (isConnected) {
                document.getElementById('connectionStatus').textContent = 'Connected';
            } else {
                document.getElementById('connectionStatus').textContent = 'Not Connected';
            }
        } else {
            console.error('Failed to check connection status:', response.statusText);
        }
    } catch (error) {
        console.error('Error checking connection status:', error);
    }
}

async function initiateConnection() {
    try {
    
        window.location.href = '/connect/facebook';
    } catch (error) {
        console.error('Error initiating connection:', error);
    }
}

async function disconnectConnection() {
    try {
        const response = await fetch('/connection/disconnect', { method: 'DELETE' });
        if (response.ok) {
            document.getElementById('connectionStatus').textContent = 'Not Connected';
            alert('Facebook Page disconnected successfully');
        } else {
            console.error('Failed to disconnect Facebook Page:', response.statusText);
        }
    } catch (error) {
        console.error('Error disconnecting Facebook Page:', error);
    }
}