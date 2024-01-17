            /**
         * Thực hiện xử lý dữ liệu DateOfBirth trả về từ api hiển thị ra bảng
         **  Author: Đinh Công Trứ(30/10/2022)
         */
        function handleDOB(dob) {
            if (dob) {
                dob = new Date(dob);
                let date = dob.getDate(dob);
                let month = dob.getMonth(dob) + 1;
                let year = dob.getFullYear(dob);

                return `${date < 10 ? "0" + date : date}/${
                    month < 10 ? "0" + month : month
                }/${year}`;
            }
            return false;
        }
        /**------------------------------------------
        *Hàm chuyển chuỗi camelCase sang snake_case
        @param {String} key-chuỗi đầu vào
        *Author: quyetkaito (07/04/2022)
        --------------------------------------------*/
        function camelToUnderscore(key) {
            var result = key.replace(/([A-Z])/g, " $1");
            result = result.trim();
            return result.split(" ").join("_").toLowerCase();
        }

        export {handleDOB,camelToUnderscore}
