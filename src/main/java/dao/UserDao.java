/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.sql.DataSource;

/**
 *
 * @author ro
 */
public class UserDao extends AbstractDataBaseDAO {
    public UserDao (DataSource ds) {
        super(ds);
    }
    
       public int getId(String email, String password) throws SQLException { //throws DAOException {
        String requete_getConsumer = "select id from user where email like ? and password like ?";
        ResultSet rs = null;
        Connection conn = null;
        //try {
            conn = getConnection();
            PreparedStatement st = conn.prepareStatement(requete_getConsumer);
            st.setString(1, email);
            st.setString(2, password);

            rs = st.executeQuery();
            if (rs.next()) {
                closeConnection(conn);
                return rs.getInt("id");
            }
            closeConnection(conn);
            return -1;
        /*} catch (SQLException e) {
            throw new DAOException("Erreur BD " + e.getMessage(), e);
        } finally {
            closeConnection(conn);
        }*/
    }
    
}
