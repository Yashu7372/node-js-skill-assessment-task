
const baseUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;

function handleUpdate(bookId) {
    // Make a GET request to fetch the book details
    $.ajax({
        url: `${baseUrl}/api/books/${bookId}`,
        method: 'GET',
        success: function (response) {
            const isIssued = response.isIssued;
            const updatedValue = !isIssued;

            // Make a PATCH request to update the book's issue status
            $.ajax({
                url: `${baseUrl}/api/books/${bookId}`,
                method: 'PATCH',
                data: { isIssued: updatedValue },
                success: function () {
                    alert("Data Updated Successfully!");
                    location.reload();
                },
                error: function (error) {
                    console.error(error);
                }
            });
        },
        error: function (error) {
            console.error(error);
        }
    });
}

function handleDelete(bookId) {
    // Make a GET request to fetch the book details
    $.ajax({
        url: `${baseUrl}/api/books/${bookId}`,
        method: 'GET',
        success: function (response) {
            const isDeleted = response.isDeleted;
            const updatedValue = !isDeleted;

            // Make a PATCH request to update the book's delete status
            $.ajax({
                url: `${baseUrl}/api/books/${bookId}`,
                method: 'PATCH',
                data: { isDeleted: updatedValue },
                success: function () {
                    updatedValue ? alert("Data Deleted Successfully!") : alert("Data Restored Successfully!");
                    location.reload();
                },
                error: function (error) {
                    console.error(error);
                }
            });
        },
        error: function (error) {
            console.error(error);
        }
    });
}

